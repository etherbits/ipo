CREATE TABLE `users` (
	`id` binary(16) NOT NULL DEFAULT (uuid()),
	`name` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
