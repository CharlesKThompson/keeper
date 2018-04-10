-- CREATE TABLE users (
--     id VARCHAR(255) NOT NULL,
--     username VARCHAR(20) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );



-- INSERT INTO users (
--     id,
--     username,
--     email,
--     password
-- ) VALUES (
--     "1",
--     "Chuck",
--     "C@C.com",
--     "Chuck"
-- );

-- DELETE FROM users WHERE id = 1
-- SELECT * FROM users 

-- CREATE TABLE vaults (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     userId VARCHAR(255) NOT NULL,
--     INDEX userId (userId),
--     FOREIGN KEY (userId)
--         REFERENCES users(id)
--         ON DELETE CASCADE,  
--     PRIMARY KEY (id)
-- );
-- INSERT INTO vaults (
--     userId,
--     name,
--     description
-- ) VALUES (
--     1,
--     "Food",
--     "What I am hungry for"
-- -- );
-- SELECT * FROM vaults

-- CREATE TABLE keeps (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     userId VARCHAR(255),
--     INDEX userId (userId),
--     FOREIGN KEY (userId)
--         REFERENCES users(id)
--         ON DELETE CASCADE,  
--     PRIMARY KEY (id)
-- );

-- INSERT INTO keeps (
--     name,
--     description,
-- ) VALUES (
--     "tester1",
--     "does this work?"
-- );

-- SELECT * FROM keeps

-- CREATE TABLE vaultkeeps (
--     id int NOT NULL AUTO_INCREMENT,
--     vaultId int NOT NULL,
--     keepId int NOT NULL,
--     userId VARCHAR(255) NOT NULL,

--     PRIMARY KEY (id),
--     INDEX (vaultId, keepId),
--     INDEX (userId),

--     FOREIGN KEY (userId)
--         REFERENCES users(id)
--         ON DELETE CASCADE,

--     FOREIGN KEY (vaultId)
--         REFERENCES vaults(id)
--         ON DELETE CASCADE,

--     FOREIGN KEY (keepId)
--         REFERENCES keeps(id)
--         ON DELETE CASCADE
-- )


-- -- USE THIS LINE FOR GET KEEPS BY VAULTID
-- SELECT * FROM vaultkeeps vk
-- INNER JOIN keeps k ON k.id = vk.keepId 
-- WHERE (vaultId = 2)