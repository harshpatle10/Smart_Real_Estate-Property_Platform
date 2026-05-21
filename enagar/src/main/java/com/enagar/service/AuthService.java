package com.enagar.service;

import com.enagar.dto.*;

public interface AuthService {

    void register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}