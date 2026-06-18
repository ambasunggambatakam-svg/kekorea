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

    print("=== NGINX LOGS ===")
    stdin, stdout, stderr = client.exec_command('tail -n 30 /var/log/nginx/error.log')
    print(stdout.read().decode())
    print(stderr.read().decode())

    print("=== PM2 STATUS ===")
    stdin, stdout, stderr = client.exec_command('pm2 status')
    print(stdout.read().decode())

    print("=== DOCKER PS ===")
    stdin, stdout, stderr = client.exec_command('docker ps')
    print(stdout.read().decode())

    client.close()

if __name__ == "__main__":
    main()
