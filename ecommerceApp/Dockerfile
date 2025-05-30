FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install -DskipTests
FROM eclipse-temurin:21-jre
COPY --from=build /app/target/ecommerceApp-0.0.1-SNAPSHOT.jar /ecommerce-application.jar
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "/ecommerce-application.jar"]
