import paramiko
import sys
import codecs

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect('103.27.206.181', username='root', password='Kekorea&epstopik2026', port=22)
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

    print("=== RESTARTING PM2 ===")
    stdin, stdout, stderr = client.exec_command('pm2 restart all')
    print(stdout.read().decode('utf-8', errors='ignore'))
    
    client.close()

if __name__ == "__main__":
    main()
