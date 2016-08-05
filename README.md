# jitsi-Lightcar

#to import data from users-seed.json to local database ( use case for testing only) 
mongoimport --db users-db --collection users --type json --file server/users-seed.json --jsonArray --drop
