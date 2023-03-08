package br.com.cwi.seguranca.security.service;

import br.com.cwi.seguranca.security.controller.response.DetalharUsuarioResponse;
import br.com.cwi.seguranca.security.domain.Usuario;
import br.com.cwi.seguranca.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.seguranca.security.mapper.DetalharUsuarioMapper.toResponse;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class DetalharUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public DetalharUsuarioResponse detalhar(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(BAD_REQUEST, "Usuário não encontrado"));

        return toResponse(usuario);
    }
}
