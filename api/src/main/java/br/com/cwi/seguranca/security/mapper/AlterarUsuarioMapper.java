package br.com.cwi.seguranca.security.mapper;

import br.com.cwi.seguranca.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.seguranca.security.controller.request.UsuarioRequest;
import br.com.cwi.seguranca.security.controller.response.UsuarioResponse;
import br.com.cwi.seguranca.security.domain.Usuario;

public class AlterarUsuarioMapper {

    public static Usuario toEntity(AlterarUsuarioRequest request) {
        Usuario entity = new Usuario();
        entity.setNome(request.getNome());
        entity.setEmail(request.getEmail());
        entity.setTelefone(request.getTelefone());
        entity.setImagem(request.getImagem());
        return entity;
    }

    public static UsuarioResponse toResponse(Usuario entity) {
        UsuarioResponse response = new UsuarioResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setEmail(entity.getEmail());
        return response;
    }
}
