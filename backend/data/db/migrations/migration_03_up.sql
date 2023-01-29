--Create enum type for categories of products
CREATE TYPE categories_enum AS ENUM ('Laptops, Tablets and Phones', 'PC and Peripheral', 'TVs, audio and video', 'Appliances', 'Gaming');

--Create enum type for roles of users
CREATE TYPE user_role_enum as ENUM('admin', 'client');

--Create enum typw for genders
CREATE TYPE gender_enum as ENUM('male', 'female');

--Create users table (v 3.0)
DROP TABLE IF EXISTS users
CREATE TABLE information_schema.users (
	id serial NOT NULL,
	email varchar(50) NULL,
	"password" varchar(250) NULL,
	"role" public."user_role_enum" NULL,
	first_name varchar(25) NULL,
	last_name varchar(25) NULL,
	"gender" public."gender_enum" NULL,
	photo varchar(250) NULL,
	avatar_color varchar(20) NULL
);

-- Create products table (v 3.0)
DROP TABLE IF EXISTS products
CREATE TABLE public.products (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	brand varchar(50) NOT NULL,
	description varchar(250) NULL,
	rating numeric(3, 2) NULL DEFAULT 0,
	number_of_reviews int4 NULL DEFAULT 0,
	price numeric(3, 2) NOT NULL,
	count_in_stock int4 NOT NULL DEFAULT 0,
	category public.categories_enum NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- Creage products_images table (v 3.0)
DROP TABLE IF EXISTS product_images
CREATE TABLE public.product_images (
	id serial4 NOT NULL,
	url varchar(250) NULL,
	product_id int4 NOT NULL,
	CONSTRAINT product_images_pkey PRIMARY KEY (id)
);

ALTER TABLE public.product_images ADD CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


-- Insert data into products table
INSERT INTO public.products
(id, "name", brand, description, rating, number_of_reviews, price, count_in_stock, category)
VALUES(14, 'Sony Playstation 4 Pro White Version', 'Sony', 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music', 4.56, 12, 4.20, 11, NULL);
INSERT INTO public.products
(id, "name", brand, description, rating, number_of_reviews, price, count_in_stock, category)
VALUES(7, 'Airpods Wireless Bluetooth Headphones', 'Apple', 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working', 5.00, 12, 4.55, 10, NULL);
INSERT INTO public.products
(id, "name", brand, description, rating, number_of_reviews, price, count_in_stock, category)
VALUES(10, 'iPhone 11 Pro 256GB Memory', 'Apple', 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life', 3.50, 56, 5.55, 40, NULL);
INSERT INTO public.products
(id, "name", brand, description, rating, number_of_reviews, price, count_in_stock, category)
VALUES(9, 'Amazon Echo Dot 3rd Generation', 'Amazon', 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space', 1.50, 20, 4.55, 30, NULL);
INSERT INTO public.products
(id, "name", brand, description, rating, number_of_reviews, price, count_in_stock, category)
VALUES(8, 'Cannon EOS 80D DSLR Camera', 'Cannon', 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design', 2.60, 24, 4.55, 10, NULL);


-- Insert data into products images table
INSERT INTO public.product_images
(id, url, product_id)
VALUES(4, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/PlayStation+4/playstation.jpg', 14);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(5, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/PlayStation+4/ps4_1.webp', 14);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(6, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/PlayStation+4/ps4_2.webp', 14);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(10, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/airpods/airpods2_1.webp', 7);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(13, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/airpods/airpods2_1.webp', 7);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(15, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/airpods/airpods2_1.webp', 7);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(16, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/airpods/airpods2_1.webp', 7);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(14, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/Iphone+11/iphone2.webp', 10);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(11, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/Iphone+11/iphone3.jpeg', 10);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(12, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/Iphone+11/iPhone_11_Black_Hero_Rosette_Vertical_US-EN_SCREEN2_139f5ff5.webp', 10);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(7, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/cannon/cannon1.jpeg', 8);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(8, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/cannon/cannon3.jpeg', 8);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(9, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/cannon/cannon2.jpeg', 8);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(2, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/amazon+echo+dot/amazon2.jpeg', 9);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(3, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/amazon+echo+dot/amazon3.jpeg', 9);
INSERT INTO public.product_images
(id, url, product_id)
VALUES(1, 'https://techrealm-images-upload-bucket.s3.eu-west-2.amazonaws.com/products/amazon+echo+dot/amazon1.webp', 9);

