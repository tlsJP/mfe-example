
REM Install packages

CALL npm i


REM Build & Deploy Shell

CALL ng build --project shell

docker build -t mfe-shell -f projects/shell/Dockerfile .

docker stop mfe-shell
docker run -itd --rm -p 5000:80 --name mfe-shell mfe-shell

REM Build & Deploy Admin

CALL ng build --project admin

docker build -t mfe-admin -f projects/admin/Dockerfile .

docker stop mfe-admin
docker run -itd --rm -p 5001:80 --name mfe-admin mfe-admin

REM Build & Deploy Dashboard

CALL ng build --project dashboard

docker build -t mfe-dashboard -f projects/dashboard/Dockerfile .

docker stop mfe-dashboard
docker run -itd --rm -p 5002:80 --name mfe-dashboard mfe-dashboard