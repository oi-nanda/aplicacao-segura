package br.com.cwi.seguranca.security.service;


import br.com.cwi.seguranca.security.controller.request.UsuarioRequest;
import br.com.cwi.seguranca.security.controller.response.UsuarioResponse;
import br.com.cwi.seguranca.security.domain.Permissao;
import br.com.cwi.seguranca.security.domain.Usuario;
import br.com.cwi.seguranca.security.repository.UsuarioRepository;
import br.com.cwi.seguranca.security.service.core.ValidaEmailUnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import static br.com.cwi.seguranca.security.domain.Funcao.USUARIO;
import static br.com.cwi.seguranca.security.mapper.UsuarioMapper.toEntity;
import static br.com.cwi.seguranca.security.mapper.UsuarioMapper.toResponse;


@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ValidaEmailUnicoService validaEmailUnicoService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public UsuarioResponse incluir(UsuarioRequest request) {
        LocalDate CRIADO_EM = LocalDate.now();

        validaEmailUnicoService.validar(request.getEmail());
        Usuario usuario = toEntity(request);

        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setTelefone(request.getTelefone());
        usuario.setImagem(request.getImagem());
        usuario.setSenha(getSenhaCriptografada(request.getSenha()));
        usuario.setAtivo(true);
        usuario.setCriadoEm(CRIADO_EM);


        usuarioRepository.save(usuario);

        return toResponse(usuario);
    }

    private String getSenhaCriptografada(String senhaAberta) {
        return passwordEncoder.encode(senhaAberta);
    }

    private Permissao getPermissaoPadrao() {
        Permissao permissao = new Permissao();
        permissao.setFuncao(USUARIO);
        return permissao;
    }
}
