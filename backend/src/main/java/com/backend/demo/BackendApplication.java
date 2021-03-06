package com.backend.demo;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.backend.demo.domain.Cliente;
import com.backend.demo.repositories.ClienteRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	@Autowired
	private ClienteRepository clienteRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		Cliente cli1 = new Cliente(null, "Paula Mendes", "paulamendes@gmail.com", 550.4);
		Cliente cli2 = new Cliente(null, "Sasha Ferreira dos Santos", "ferreirasasha4@gmail.com", 2100.58);
		Cliente cli3 = new Cliente(null, "Gustavo da Silva", "gusilva@gmail.com", 35.99);
		
		clienteRepository.saveAll(Arrays.asList(cli1,cli2,cli3));
	}
}
