package com.canaparro.travelplanner.service;

import com.canaparro.travelplanner.api.Location;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.iterableWithSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LocationResource.class)
class LocationResourceTest {

    @Autowired
    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Nested
    class GetByIdTests {

        @Test
        @DisplayName("Given no Locations exist for id should return an empty list")
        void givenNoLocationsExistForId_shouldReturnAnEmptyList() throws Exception {
            MvcResult mvcResult = mockMvc.perform(get("/locations/1")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andReturn();

            List<Location> response = objectMapper.readValue(mvcResult.getResponse().getContentAsByteArray(), new TypeReference<>() {});
            assertThat(response).isEqualTo(List.of());
        }
    }

    @Nested
    class saveTests {

        @Test
        @DisplayName("Given a location should return an id")
        void givenALocation_shouldReturnAnId() throws Exception {
            // Given
            final Location location = new Location(0.0, 0.0);

            // Should
            MvcResult mvcResult = mockMvc.perform(post("/locations")
                            .content(objectMapper.writeValueAsString(location))
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isCreated())
                    .andReturn();

            Long response = objectMapper.readValue(mvcResult.getResponse().getContentAsByteArray(), Long.class);
            assertThat(response).isEqualTo(1L);
        }

        @Test
        @DisplayName("Given no location in body should return bad request")
        void givenNoLocationInBody_shouldReturnBadRequest() throws Exception {
            mockMvc.perform(post("/locations")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest());
        }
    }

}