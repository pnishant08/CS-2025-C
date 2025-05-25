package com.example.alumniconnect.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

@Component
public class JwtUtil {

    @Value("${JWT_SECRET_KEY}")
    private String SECRET;
    
    private final long EXPIRATION = 1000 * 60 * 60;

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .claim("sub", userDetails.getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET)), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET))).build().parseClaimsJws(token).getBody().getSubject();
    }

    private boolean isTokenExpired(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET)))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
    }
}