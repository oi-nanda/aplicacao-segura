package br.com.cwi.seguranca.security.service;

import br.com.cwi.seguranca.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.seguranca.security.controller.request.UsuarioRequest;
import br.com.cwi.seguranca.security.controller.response.UsuarioResponse;
import br.com.cwi.seguranca.security.domain.Usuario;
import br.com.cwi.seguranca.security.repository.UsuarioRepository;
import br.com.cwi.seguranca.security.service.core.ValidaEmailUnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


import java.time.LocalDate;
import java.util.Date;

import static br.com.cwi.seguranca.security.mapper.AlterarUsuarioMapper.toResponse;

@Service
public class AlterarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ValidaEmailUnicoService validaEmailUnicoService;

    @Transactional
    public UsuarioResponse alterar( AlterarUsuarioRequest request){

        LocalDate MODIFICADO_EM = LocalDate.now();
        Usuario usuario = usuarioRepository.findById(request.getId()).get();

        validaEmailUnicoService.validar(request.getEmail());

        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setTelefone(request.getTelefone());
        usuario.setImagem(request.getImagem());
        usuario.setAtualizadoEm(MODIFICADO_EM);

        usuarioRepository.save(usuario);

        return toResponse(usuario);
    }

}
