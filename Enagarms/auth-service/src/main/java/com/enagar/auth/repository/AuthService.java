package com.enagar.auth.service;

import com.enagar.auth.dto.AuthResponse;
import com.enagar.auth.dto.LoginRequest;
import com.enagar.auth.dto.RegisterRequest;

public interface AuthService {

    String register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}