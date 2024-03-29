package com.api.movieflix.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket movieFlixApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(metaInfo());
	}

	private ApiInfo metaInfo() {
		ApiInfo apiInfo = new ApiInfo(
				"MovieFlix API REST", 
				"The MovieFlix Api consists of a movie page, which can be listed and rated by users.", 
				"1.0",
				"Terms of Service",
				new Contact("Sidney Rodrigues", "https://github.com/sidneyrod/", "sidney.silva.rodrigues@outlook.com"),
				"Apache License Version 2.0", "https://www.apache.org/licesen.html", new ArrayList<>()
		);
		
		return apiInfo;
	}
}

