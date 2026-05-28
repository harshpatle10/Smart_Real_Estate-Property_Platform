package com.enagar.auth.service.impl;

import com.enagar.auth.dto.AuthResponse;
import com.enagar.auth.dto.LoginRequest;
import com.enagar.auth.dto.RegisterRequest;
import com.enagar.auth.entity.User;
import com.enagar.auth.repository.UserRepository;
import com.enagar.auth.security.JwtUtil;
import com.enagar.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    @Override
    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(
                        passwordEncoder.encode(
                                request.getPassword()
                        )
                )
                .role(request.getRole())
                .build();

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        boolean matched = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!matched) {
            throw new RuntimeException("Invalid Password");
        }

        String token =
                jwtUtil.generateToken(user.getEmail());
     String str = user.getRole().name();
        return new AuthResponse(
                token,
                "Login Successful"+str,
                user.getRole().name()
        );
    }
}