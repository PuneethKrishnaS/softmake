import os
import shutil

def cleanup():
    print("Running system logs and cache cleanups...")
    
    # 1. Clean pycache
    for root, dirs, files in os.walk('.'):
        for d in dirs:
            if d == '__pycache__':
                path = os.path.join(root, d)
                print(f"Removing: {path}")
                shutil.rmtree(path)
                
    # 2. Clean build assets
    for folder in ['dist', 'build', '.eslintcache']:
        for root, dirs, files in os.walk('.'):
            if folder in dirs:
                path = os.path.join(root, folder)
                print(f"Removing build folder: {path}")
                shutil.rmtree(path)
                
    print("✅ Cleanup completed successfully.")

if __name__ == '__main__':
    cleanup()
