package com.ahmad.practice.usersignupapi.services;


import com.ahmad.practice.usersignupapi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>
{
}
