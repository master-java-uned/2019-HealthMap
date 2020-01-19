package uned.master.java.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
    @NotNull
    @Column(unique = true)
    private String nombreUsuario;


    @NotNull
    private String password;

    @NotNull
    @ManyToMany
    @JoinTable(name = "usuarioRol", joinColumns = @JoinColumn(name = "usuarioId"), inverseJoinColumns = @JoinColumn(name = "rolId"))
    private Set<Rol> roles = new HashSet<>();
    

    public Usuario() {
    }

   
    public Usuario(@NotNull String nombreUsuario, @NotNull String password) {
         this.nombreUsuario = nombreUsuario;
         this.password = password;
     }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Set<Rol> getRoles() {
        return roles;
    }

    public void setRoles(Set<Rol> roles) {
        this.roles = roles;
    }
    
}