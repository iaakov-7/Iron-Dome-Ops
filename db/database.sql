-- Active: 1784102625324@@127.0.0.1@3306

USE iron_dome;

CREATE TABLE IF NOT EXISTS operators(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    operator_rank VARCHAR (100) NOT NULL
)

CREATE TABLE IF NOT EXISTS incidents(
    id INT AUTO_INCREMENT PRIMARY KEY,
    code_name VARCHAR(100) NOT NULL,
    threat_level VARCHAR (50) NOT NULL,
    status VARCHAR(50) DEFAULT 'OPEN',
    operator_id INT ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_incidends_operators
    FOREIGN KEY (operator_id) REFERENCES operators(id)
)

CREATE TABLE IF NOT EXISTS logs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    action  VARCHAR(100) NOT NULL,
    incident_id INT,
    operator_id INT,
    description  TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_logs_operators
    FOREIGN KEY (operator_id) REFERENCES operators(id),

    CONSTRAINT fk_logs_incidents
    FOREIGN KEY (incident_id) REFERENCES operators(id)
)

DESCRIBE operators

SELECT * FROM incidents

DESCRIBE logs