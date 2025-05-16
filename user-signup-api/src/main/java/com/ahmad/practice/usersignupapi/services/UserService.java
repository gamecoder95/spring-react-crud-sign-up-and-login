package com.ahmad.practice.usersignupapi.services;

import com.ahmad.practice.usersignupapi.api.model.User;
import com.ahmad.practice.usersignupapi.api.model.UserDTO;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public void createNewUser(UserDTO userDTO)
    {
        User user = new User(
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getEmail(),
                userDTO.getUsername(),
                userDTO.getPassword()
        );

        userRepository.save(user);
    }
}
