package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

public interface IArquivo {

    void setObject(Object obj);
    String getTextoParaExportar(boolean isCsv);
    void exportar(String nomeDoArquivo, boolean append, boolean isCsv) throws Exception;
    void desserializar(ListaObj<String> linhas);
    Object getObject();
}
