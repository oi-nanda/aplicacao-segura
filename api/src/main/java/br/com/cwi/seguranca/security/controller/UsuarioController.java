package br.com.cwi.seguranca.security.controller;


import br.com.cwi.seguranca.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.seguranca.security.controller.request.UsuarioRequest;
import br.com.cwi.seguranca.security.controller.response.DetalharUsuarioResponse;
import br.com.cwi.seguranca.security.controller.response.UsuarioResponse;
import br.com.cwi.seguranca.security.service.AlterarUsuarioService;
import br.com.cwi.seguranca.security.service.DetalharUsuarioService;
import br.com.cwi.seguranca.security.service.IncluirUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static br.com.cwi.seguranca.security.domain.Funcao.Nomes.USUARIO;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private DetalharUsuarioService detalharUsuarioService;

    @Autowired
    private AlterarUsuarioService alterarUsuarioService;

    @PostMapping("/cadastrar")
    public UsuarioResponse incluir( @Valid @RequestBody UsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }


    @GetMapping("/detalhar/{id}")
    public DetalharUsuarioResponse detalhar(@PathVariable Long id) {
        return detalharUsuarioService.detalhar(id);
    }


    //@Secured(USUARIO)
    @PutMapping("/perfil/alterar")
    public UsuarioResponse alterar( @RequestBody AlterarUsuarioRequest request) {
        return alterarUsuarioService.alterar(request);
    }
}


