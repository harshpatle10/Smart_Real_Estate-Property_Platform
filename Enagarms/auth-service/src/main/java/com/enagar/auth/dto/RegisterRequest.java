package com.enagar.auth.dto;

import com.enagar.auth.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Role role;
}