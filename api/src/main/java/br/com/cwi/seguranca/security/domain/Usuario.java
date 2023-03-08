package br.com.cwi.seguranca.security.domain;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Usuario {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    private String telefone;

    private boolean ativo;

    @Column(nullable = false)
    private String senha;
    @Column(nullable = true)
    private String imagem;

    @Column(name="criado_em")
    private LocalDate criadoEm;

    @Column(name="atualizado_em")
    private LocalDate atualizadoEm;

    

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Permissao> permissoes = new ArrayList<>();

    public Permissao adicionarPermissao(Permissao permissao) {
        this.permissoes.add(permissao);
        permissao.setUsuario(this);
        return permissao;
    }

}
