FROM adoptopenjdk/openjdk11:alpine-jre
ARG JAR_FILE=target/*.jar
WORKDIR /opt/app
COPY ${JAR_FILE} DrugMicroservice-master.jar
ENTRYPOINT ["java","-jar","DrugMicroservice-master.jar"]