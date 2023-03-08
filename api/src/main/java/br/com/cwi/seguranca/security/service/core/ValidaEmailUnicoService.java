package br.com.cwi.seguranca.security.service.core;


import br.com.cwi.seguranca.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaEmailUnicoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void validar(String email){

        boolean emailJaExistente = usuarioRepository.existsByEmail(email);


        if(emailJaExistente){
            throw new ResponseStatusException(BAD_REQUEST, "Email já existente");
        };
    }
}
