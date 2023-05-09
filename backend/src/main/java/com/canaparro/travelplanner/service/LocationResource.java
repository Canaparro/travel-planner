package com.canaparro.travelplanner.service;

import com.canaparro.travelplanner.api.Location;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationResource {

    @GetMapping("/{id}")
    public ResponseEntity<List<Location>> getById(@PathVariable final long id) {
        return ResponseEntity.ok(List.of());
    }

    @PostMapping
    public ResponseEntity<Long> save(@RequestBody final Location location) {
        return ResponseEntity.status(HttpStatus.CREATED).body(1L);
    }
}
