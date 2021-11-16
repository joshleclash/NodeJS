create database tp
--use tp
drop table users
create table users
(
	id int identity(1,1),
	firstName varchar(250),
	lastName varchar(250),
	email varchar(250),
	status bit,
	userPassword varbinary(8000),
	dateCreated datetime default(getdate())
);
/*
drop trigger Tr_HasgPassword
alter trigger Tr_HasgPassword
on users 
after insert
as
begin
	declare @pSha256 nvarchar(4000)
	declare @passWord nvarchar(4000)
	declare @pid int
	select @passWord=HASHBYTES('SHA2_256', userPassword),@pid=id from inserted
	update users set userPassword=@pSha256  from users where id=@pid
end;*/
--delete users
/*
declare @pSha256 varbinary(8000)
set @pSha256=HASHBYTES('SHA2_256','1019002704')
	select @pSha256
insert into users
(firstName,lastName,email,status,userPassword)
values
('Juan','Verano','joshsummer_st80@hotmail.com',1,@pSha256)*/
--select * from users;

alter procedure sp_insertUpUsers (@firstName varchar(250),@lastName varchar(250),@email varchar(250),@status bit,@userPassword varchar(8000))
as	
begin
	declare @castVarchar varbinary(8000) 
	set @castVarchar = HASHBYTES('SHA2_256',@userPassword)
		IF EXISTS(SELECT * FROM users WHERE email = @email)
		BEGIN
				SELECT 'Email user exist in database, please review your informatión' Response
		END
		ELSE
		BEGIN	
			insert into users (firstName,lastName,email,status,userPassword) values (@firstName,@lastName,@email,@status,@castVarchar)
			select @@IDENTITY AS Response
		END
end
	


/*
select * from users
*/