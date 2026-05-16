package com.insurance.auth_service.dto;

import com.insurance.auth_service.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private Role role;
}
