# How to run payload locally using Mongodb docker container.
    1. start the docker locally
    2. docker run -d --name mongo-service  \
	    -e MONGO_INITDB_ROOT_USERNAME=root \
	    -e MONGO_INITDB_ROOT_PASSWORD=root \
	    -p 27017:27017 \
	    mongo
	3. create .env on the root level
      	1. Add the following env variables 
			MONGODB_URI=
			PAYLOAD_SECRET=





