package org.fequalsmath.userformmanagement.service;

import org.fequalsmath.userformmanagement.model.User;
import org.fequalsmath.userformmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceImplement implements userService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user)
    {
        return userRepository.save(user);
    }
}
