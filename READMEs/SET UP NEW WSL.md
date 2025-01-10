### Setting up a new development machine (assumes Ubuntu environment is available and running)
#### All these steps take place in Ubuntu terminal
1. Enable systemctl by editing /etc/wsl.conf and adding new [boot] section containing systemd=true
2. Make ~/dev
3. Install 
    - nvm (source ~/.bashrc)
    - node (using nvm ls-remote)
    - pnpm (npm install -g pnpm@latest)
    - git (likely already installed)
4. Open VSCode in Windows and use remote explorer to connect to new Ubuntu machine in WSL.
4. Copy ~/.aws from another wsl machine
5. If the repo exists on github, clone the repo; you should be good to go
6. If it's not in github, then.
7. Install/setup Mariadb.
    - sudo apt install mariadb-server
    - sudo mysql_secure_installation
    - sudo systemctl status mariadb (to check for autostart)
    - sudo mariadb
        - create user 'ica_user'@'localhost' identified by '2541';
        - grant all on *.* to 'ica_user'@localhost with grant option;
        - select User from mysql.user;
        - create database ica_schema;
        - show databases;
        - grant select, insert, update on ica_schema.* to ica_user@localhost;
        - flush privileges;
    - Use Prisma to set up initial database.
        - pnpm run prisma:reset
        
