package com.ahmad.practice.usersignupapi.api.controller;

import com.ahmad.practice.usersignupapi.api.model.UserDTO;
import com.ahmad.practice.usersignupapi.services.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController
{
    private final UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @PostMapping("/create")
    public String createUser(@Valid @RequestBody UserDTO userDTO)
    {
        userService.createNewUser(userDTO);

        return "redirect:/success";
    }

    @GetMapping("/success")
    public String onCreateUser()
    {
        return "success";
    }
}
