-- Core User Table: Yahan se system shuru hoga
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'reception', -- Admin ya Reception
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);