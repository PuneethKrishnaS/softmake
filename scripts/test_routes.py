import json
import urllib.request
import urllib.error
import sys

BASE_URL = "http://127.0.0.1:8000"

def make_request(url, method="GET", data=None, token=None):
    full_url = f"{BASE_URL}{url}"
    headers = {
        "Content-Type": "application/json"
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
        
    req_data = None
    if data:
        req_data = json.dumps(data).encode("utf-8")
        
    req = urllib.request.Request(full_url, data=req_data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as res:
            response_body = res.read().decode("utf-8")
            return res.status, json.loads(response_body) if response_body else {}
    except urllib.error.HTTPError as e:
        try:
            error_body = e.read().decode("utf-8")
            return e.code, json.loads(error_body) if error_body else {}
        except Exception:
            return e.code, {"error": e.reason}
    except Exception as e:
        return 0, {"error": str(e)}

def main():
    print("Starting API Route Tests...")
    
    # 1. Login
    print("\n[TEST 1] POST /api/auth/login/ (Student Login)")
    status, res = make_request("/api/auth/login/", method="POST", data={
        "username": "1rv22cs001",
        "password": "student123"
    })
    print(f"Status: {status}")
    if status == 200:
        print("Success! Tokens received.")
        access_token = res.get("access")
    else:
        print(f"Login failed: {res}")
        sys.exit(1)
        
    # 2. Get Me
    print("\n[TEST 2] GET /api/auth/me/ (Authenticated User Profile)")
    status, res = make_request("/api/auth/me/", token=access_token)
    print(f"Status: {status}")
    print(f"User: {res.get('username')}, Role: {res.get('role')}")
    print(f"Student USN: {res.get('student_profile', {}).get('usn') if res.get('student_profile') else 'None'}")
    
    # 3. List Users
    print("\n[TEST 3] GET /api/users/ (List Users)")
    status, res = make_request("/api/users/", token=access_token)
    print(f"Status: {status}")
    print(f"Users Count: {len(res) if isinstance(res, list) else res.get('count', 0)}")
    
    # 4. List Students
    print("\n[TEST 4] GET /api/students/ (List Students)")
    status, res = make_request("/api/students/", token=access_token)
    print(f"Status: {status}")
    print(f"Students Count: {len(res) if isinstance(res, list) else res.get('count', 0)}")
    
    # 5. List Projects
    print("\n[TEST 5] GET /api/projects/ (List Projects)")
    status, res = make_request("/api/projects/", token=access_token)
    print(f"Status: {status}")
    print(f"Projects Count: {len(res) if isinstance(res, list) else res.get('count', 0)}")
    
    # 6. List Tickets
    print("\n[TEST 6] GET /api/tickets/ (List Tickets)")
    status, res = make_request("/api/tickets/", token=access_token)
    print(f"Status: {status}")
    print(f"Tickets Count: {len(res) if isinstance(res, list) else res.get('count', 0)}")
    
    # 7. List Payments
    print("\n[TEST 7] GET /api/payments/ (List Payments)")
    status, res = make_request("/api/payments/", token=access_token)
    print(f"Status: {status}")
    print(f"Payments Count: {len(res) if isinstance(res, list) else res.get('count', 0)}")
    
    print("\nAll Route Tests Completed!")

if __name__ == '__main__':
    main()
