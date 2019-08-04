using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace DAL
{
    public class Conexao
    {

        public static bool VerificarOperacao(string query)
        {
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=TesteUnite;Trusted_Connection=True;ConnectRetryCount=0";

            using (SqlConnection connection = new SqlConnection(
                       connectionString))
            {
                SqlCommand command = new SqlCommand(
                    query, connection);
                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    return reader.HasRows;
                }
            }
        }
        public static ArrayList RetornarGrid(string query)
        {
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=TesteUnite;Trusted_Connection=True;ConnectRetryCount=0";

            using (SqlConnection connection = new SqlConnection(
                       connectionString))
            {
                SqlCommand command = new SqlCommand(
                    query, connection);
                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    int count = 0;
                    ArrayList result = new ArrayList();
                    foreach (object obj in reader)
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            result.Add(reader[count]);
                            count++;
                        }
                    }
                    return result;
                }
            }
        }
        public static string Inserir(string query)
        {
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=TesteUnite;Trusted_Connection=True;ConnectRetryCount=0";

            using (SqlConnection connection = new SqlConnection(
                       connectionString))
            {
                try
                {
                    SqlCommand command = new SqlCommand(
                    query, connection);
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        connection.Close();
                        return "Inserido com sucesso";
                    }
                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }

            }
        }
        public static Array VariasLinhas(string query)
        {
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=TesteUnite;Trusted_Connection=True;ConnectRetryCount=0";

            using (SqlConnection connection = new SqlConnection(
                       connectionString))
            {
                SqlCommand command = new SqlCommand(
                    query, connection);
                connection.Open();

                List<Dictionary<string, string>> rows = new List<Dictionary<string, string>>();
                Dictionary<string, string> column;


                try
                {
                    connection.Close();
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {    //Every new row will create a new dictionary that holds the columns
                        column = new Dictionary<string, string>();

                        column["ID"] = reader["ID"].ToString();
                        column["Nome"] = reader["Nome"].ToString();
                        column["CPF"] = reader["CPF"].ToString();
                        column["RG"] = reader["RG"].ToString();
                        column["DataNascimento"] = reader["DataNascimento"].ToString();

                        rows.Add(column); //Place the dictionary into the list
                    }
                    reader.Close();
                    //foreach (var item in rows)
                    //{
                    //    string.Join("\n", rows);
                    //}
                    string result = string.Join("", rows);
                    var teste = rows.ToArray();
                    return teste;
                }
                catch (Exception ex)
                {
                    //If an exception occurs, write it to the console
                    Console.WriteLine(ex.ToString());
                    return string.Concat("Erro", ex).ToArray();
                }
                finally
                {
                    connection.Close();
                }
            }
        }
    }
}
