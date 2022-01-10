package com.grupo2.back.service;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class ServiceRequestTest {

	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	void devuelveElSaludo() throws Exception {
		assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/",
				String.class)).contains("Backend - Grupo 2");
	}

    @Test
    void resultadoSumaCorrecto() throws Exception {
		assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/suma/10/5",
			String.class)).contains("15");
	}

	@Test
    void resultadoRestaCorrecto() throws Exception {
		assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/resta/10/5",
			String.class)).contains("5");
	}
}