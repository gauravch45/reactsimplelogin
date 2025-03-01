USE reactusers;

CREATE TABLE IF NOT EXISTS users (
	id INT AUTO_INCREMENT,
	name VARCHAR(100),
	username VARCHAR(100),
	password VARCHAR(50),
	PRIMARY KEY(id)
	);

	
LOAD DATA LOCAL INFILE '/Data.json' INTO TABLE users(name,username,password);
