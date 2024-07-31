import streamlit as st

# Leer el contenido del archivo HTML
with open("index.html", "r", encoding='utf-8') as file:
    html_content = file.read()

# Mostrar el contenido HTML en Streamlit
st.write(html_content, unsafe_allow_html=True)
