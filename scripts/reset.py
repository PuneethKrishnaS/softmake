import os
import sys
import subprocess
from urllib.parse import urlparse
import psycopg2
from dotenv import load_dotenv

# Add backend directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), '../apps/backend'))

load_dotenv(os.path.join(os.path.dirname(__file__), '../apps/backend/.env'))

def reset_postgres(db_url):
    print("Resetting PostgreSQL database...")
    result = urlparse(db_url)
    username = result.username
    password = result.password
    database = result.path[1:]
    hostname = result.hostname
    port = result.port
    
    conn = psycopg2.connect(
        database=database,
        user=username,
        password=password,
        host=hostname,
        port=port
    )
    conn.autocommit = True
    cursor = conn.cursor()
    
    # Drop all tables in the public schema
    cursor.execute("""
        DROP SCHEMA public CASCADE;
        CREATE SCHEMA public;
        GRANT ALL ON SCHEMA public TO public;
    """)
    print("Schema public recreated (all tables dropped).")
    conn.close()

def main():
    db_url = os.environ.get('DATABASE_URL')
    if not db_url:
        print("DATABASE_URL not found in environment.")
        return
        
    if db_url.startswith('postgresql'):
        try:
            reset_postgres(db_url)
        except Exception as e:
            print(f"Error resetting PostgreSQL: {e}")
            return
    elif db_url.startswith('sqlite') or 'sqlite' in db_url:
        # SQLite
        db_path = db_url.replace('sqlite:///', '')
        if not db_path:
            db_path = 'db.sqlite3'
        if os.path.exists(db_path):
            try:
                os.remove(db_path)
                print(f"Removed SQLite db file: {db_path}")
            except Exception as e:
                print(f"Error removing SQLite file: {e}")
                return
            
    # Run migrations
    python_path = os.path.join(os.path.dirname(__file__), '../apps/backend/.venv/Scripts/python.exe')
    if not os.path.exists(python_path):
        python_path = 'python' # fallback
        
    manage_py = os.path.join(os.path.dirname(__file__), '../apps/backend/manage.py')
    
    print("Running migrations...")
    try:
        subprocess.run([python_path, manage_py, 'migrate'], check=True)
        print("Database reset and migrations applied successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error running migrations: {e}")

if __name__ == '__main__':
    main()
