# challenge-open-data
Visualization of the new regions of France by using clustering and correlation
based on socio-economics indicators.

# Running using vagrant
- From the project root directory:
```sh
vagrant up
```
Will install the required packages.
- Connect to the vagrant box with:
```sh
vagrant ssh
```

- Import the data in mongodb:
```sh
cd /vagrant/mongoDB-init/
mongoimport -d cod -c classifications < classification-region-2016.json
mongoimport -d cod -c classifications < classification-old-regions.json
```

- Start `play` backend:
```sh
cd /vagrant/backend/
./activator "run 9090"
```

- Install dependencies and start the frontend:
```sh
cd /vagrant/frontend/
npm install
bower install
grunt serve
```
- Open `chrome` and head to `localhost:9000`
