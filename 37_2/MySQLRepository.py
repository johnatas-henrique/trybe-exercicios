class MySQLRepository(Repository):
    def update(self, entity, **kwargs):
        "Sobrescreve o método update da interface, implementando a atualização"
        self._validate_attributes(entity, **kwargs)
        entity.update().where(id=entity.id).values(**kwargs)
