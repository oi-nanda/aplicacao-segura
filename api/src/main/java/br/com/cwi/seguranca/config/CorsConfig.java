package br.com.cwi.seguranca.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    private static final String ASTERISK = "*";

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")
                .allowedMethods(ASTERISK)
                .allowedHeaders(ASTERISK)
                .allowedOriginPatterns(ASTERISK)
                .allowCredentials(true);
    }
}
