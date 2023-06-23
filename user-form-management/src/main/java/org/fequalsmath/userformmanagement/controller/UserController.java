package org.fequalsmath.userformmanagement.controller;

import org.fequalsmath.userformmanagement.model.User;
import org.fequalsmath.userformmanagement.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "https://fequalsmath.org")
public class UserController {

    @Autowired
    private userService service;

    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        service.saveUser(user);
        return "Response has been saved";
    }

}
