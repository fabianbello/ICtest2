package com.grupo2.back.service;

import com.grupo2.back.model.Resta;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("*")
public class RestaService {

    @GetMapping("/resta/{primero}/{segundo}")
    public @ResponseBody
    int restarNumeros(@PathVariable int primero, @PathVariable int segundo){
        var nuevaResta = new Resta(primero, segundo);
        return nuevaResta.restar();
    }
}
