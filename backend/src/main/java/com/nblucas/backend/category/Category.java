package com.nblucas.backend.category;

import jakarta.persistence.*;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @SequenceGenerator(sequenceName = "categories_id_seq", name = "seq_categories", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_categories")
    Long id;

    @Column(name = "name", nullable = false)
    String name;
}
