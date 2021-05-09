# Steps for Run DB as Container

## Step 1:

Created Run the Mongo Container use below Command:

```powershell

docker pull mongo
docker run --name mongodb -p 37017:27017 -d mongo

```
