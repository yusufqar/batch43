package connection

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
)

var Conn *pgx.Conn

func DatabaseConnection() {
	var err error
	databaseUrl := "postgres://postgres:ysfbaru123@localhost:5432/postgres"
	Conn, err = pgx.Connect(context.Background(), databaseUrl)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v", err)
		os.Exit(1)
	}

	fmt.Println("Database connected.")
}

// postgres://{user}:{password}@{host}:{port}/{database}
// user = user postgres nya
// password = password postgres nya
// host = host postgres nya
// port = port postgres nya
// database = database postgres nya