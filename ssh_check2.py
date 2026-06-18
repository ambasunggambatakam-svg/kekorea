import paramiko
import sys

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect('103.27.206.181', username='root', password='Kekorea&epstopik2026', port=22)
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

    print("=== PM2 STATUS ===")
    stdin, stdout, stderr = client.exec_command('pm2 jlist')
    print(stdout.read().decode('utf-8', errors='ignore'))

    print("=== PM2 LOGS ===")
    stdin, stdout, stderr = client.exec_command('pm2 logs --nostream --lines 50')
    print(stdout.read().decode('utf-8', errors='ignore'))

    client.close()

if __name__ == "__main__":
    main()
