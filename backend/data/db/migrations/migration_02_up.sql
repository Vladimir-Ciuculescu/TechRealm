
CREATE TYPE gender_enum AS ENUM ('male', 'female');


CREATE TABLE public.users (
	id serial4 NOT NULL,
	"name" varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	"password" varchar(250) NOT NULL,
	"role" public."userrole" NULL,
	first_name varchar(25) NULL,
	last_name varchar(25) NULL,
	"gender" public."gender_enum" NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

alter table public.users 
add column photo varchar(250)

alter table public.users 
add column avatar_color varchar(20)

